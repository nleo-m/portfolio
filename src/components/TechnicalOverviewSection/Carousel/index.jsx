export default function Carousel() {
  const [pages, setPages] = useState(Math.ceil(topic?.posts?.length / 4));
  const [currPage, setCurrPage] = useState(1);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const navigate = useNavigate();

  useEffect(() => {
    const [hoverPlusSign, setHoverPlusSign] = useState(false);
    const [brSmall, brMedium, brLarge] = useMediaQuery([
      "(max-width: 640px)",
      "(min-width: 640px) and (max-width: 1064px)",
      "(min-width: 1064px)",
    ]);

    if (brSmall) return setSlidesToShow(1);
    if (brMedium) return setSlidesToShow(2);

    return setSlidesToShow(4);
  }, [brSmall, brMedium, brLarge]);

  useEffect(() => {
    setPages(Math.ceil(topic?.posts?.length / slidesToShow));

    slider.current.slickGoTo(0);

    setCurrPage(1);
  }, [slidesToShow]);

  const carouselSlide = (direction) => {
    if (direction === "backward") {
      slider.current.slickPrev();
      return setCurrPage((page) => page - 1);
    }

    slider.current.slickNext();
    return setCurrPage((page) => page + 1);
  };

  const slider = useRef(null);

  const settings = {
    dots: brSmall || brMedium,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    responsive: [
      {
        breakpoint: 1028,
        settings: {
          slidesToShow: slidesToShow,
          slidesToScroll: slidesToShow,
          variableWidth: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: slidesToShow,
          slidesToScroll: slidesToShow,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <Flex
      direction="column"
      position="relative"
      paddingX="2.5em"
      w="100vw"
      mb="40px"
    >
      <Text
        textAlign="start"
        fontWeight="bold"
        fontSize="24px"
        ml=".5em"
        mb=".75em"
      >
        {topic?.title}
      </Text>
      <Flex>
        {brLarge && currPage !== 1 && pages > 1 && (
          <>
            <Box
              position="absolute"
              top="calc(50% - 25px)"
              left="20px"
              zIndex={99}
            >
              <IconButton
                icon={<ArrowCircleLeft size={75} weight="fill" />}
                color="gray.700"
                background="transparent"
                _active={{ background: "transparent" }}
                _hover={{ color: "gray.800", transform: "scale(1.025)" }}
                onMouseUp={() => carouselSlide("backward")}
              />
            </Box>
          </>
        )}
        <Box
          position="relative"
          h={{ base: "400px", xl: "100%" }}
          w="100%"
          overflow="hidden"
        >
          <Slider ref={slider} {...settings}>
            {topic?.posts
              .sort((a, b) => (a.created_at > b.created_at ? -1 : 1))
              .map((item, index) => (
                <Box
                  h="300px"
                  position="relative"
                  maxW="500px"
                  bg="gray.200"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  transition=".25s ease"
                  textAlign="start"
                  mb="40px"
                  _hover={{ cursor: "pointer", transform: "scale(1.01)" }}
                  onClick={() => navigate(`${item?.id}`)}
                >
                  <Box
                    position="absolute"
                    h="100%"
                    w="100%"
                    zIndex={98}
                    onMouseOver={() => setHoverPlusSign(index)}
                    onMouseOut={() => setHoverPlusSign(false)}
                  />
                  <Image
                    src={item?.imports?.find((i) => i?.type === "cover")?.key}
                    alt=" "
                    boxSize="100%"
                    objectFit="cover"
                    transition=".25s ease"
                    mb=".5em"
                    _hover={{
                      cursor: "pointer",
                      filter: "brightness(0.7)",
                      transform: "scale(1.01)",
                    }}
                  />
                  {(hoverPlusSign === index || !brLarge) && (
                    <>
                      <Box
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        maxH="90px"
                        maxW="90px"
                        zIndex={1}
                      >
                        <PlusCircle size="100%" color="#2D3748" weight="fill" />
                      </Box>
                      <Box
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        borderRadius="50%"
                        bg="white"
                        h="50px"
                        w="50px"
                      />
                    </>
                  )}
                  <Text
                    fontWeight="bold"
                    fontSize="20px"
                    maxH="75px"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    mb="none"
                  >
                    {item?.title}
                  </Text>
                  <Text
                    fontWeight="regular"
                    fontSize="18px"
                    maxH="75px"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                  >
                    {item?.subtitle}
                  </Text>
                </Box>
              ))}
          </Slider>
        </Box>

        {brLarge && currPage < pages && pages > 1 && (
          <>
            <Box
              position="absolute"
              top="calc(50% - 25px)"
              right="20px"
              zIndex={99}
            >
              <IconButton
                icon={<ArrowCircleRight size={75} weight="fill" />}
                color="gray.700"
                background="transparent"
                _active={{ background: "transparent" }}
                _hover={{ color: "gray.800", transform: "scale(1.025)" }}
                onMouseUp={() => carouselSlide()}
              />
            </Box>
            <Box
              position="absolute"
              top="calc(50% - 30px)"
              right="30px"
              borderRadius="50%"
              bg="white"
              h="50px"
              w="50px"
            />
          </>
        )}
      </Flex>
    </Flex>
  );
}
