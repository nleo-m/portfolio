import { Icon } from "@chakra-ui/react";

export const LocationIcon = (props) => (
  <Icon viewBox="0 0 512 512" {...props}>
    <path
      d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
    />
  </Icon>
);

export const EmailIcon = (props) => (
  <Icon viewBox="0 0 1920 1920" {...props}>
    <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" />
  </Icon>
);

export const EyeIcon = (props) => (
  <Icon
    viewBox="0 0 32 32"
    boxSize={20}
    transition=".25s ease"
    fill="black"
    _hover={{
      cursor: "pointer",
      transform: "scale(1.10)",
      fill: "blue.500",
    }}
    {...props}
  >
    <path d="M0 16q0.064 0.128 0.16 0.352t0.48 0.928 0.832 1.344 1.248 1.536 1.664 1.696 2.144 1.568 2.624 1.344 3.136 0.896 3.712 0.352 3.712-0.352 3.168-0.928 2.592-1.312 2.144-1.6 1.664-1.632 1.248-1.6 0.832-1.312 0.48-0.928l0.16-0.352q-0.032-0.128-0.16-0.352t-0.48-0.896-0.832-1.344-1.248-1.568-1.664-1.664-2.144-1.568-2.624-1.344-3.136-0.896-3.712-0.352-3.712 0.352-3.168 0.896-2.592 1.344-2.144 1.568-1.664 1.664-1.248 1.568-0.832 1.344-0.48 0.928zM10.016 16q0-2.464 1.728-4.224t4.256-1.76 4.256 1.76 1.76 4.224-1.76 4.256-4.256 1.76-4.256-1.76-1.728-4.256zM12 16q0 1.664 1.184 2.848t2.816 1.152 2.816-1.152 1.184-2.848-1.184-2.816-2.816-1.184-2.816 1.184l2.816 2.816h-4z" />
  </Icon>
);

export const HamburguerIcon = (props) => (
  <Icon
    viewBox="0 0 24 24"
    boxSize={20}
    transition=".25s ease"
    stroke="white"
    _hover={{
      cursor: "pointer",
      transform: "scale(1.10)",
      stroke: "blue.500",
    }}
    {...props}
  >
    <path
      d="M5 7H19"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 12L19 12"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 17L19 17"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Icon>
);

export const CloseIcon = (props) => (
  <Icon
    viewBox="0 0 24 24"
    boxSize={20}
    transition=".25s ease"
    stroke="white"
    strokeWidth={2}
    _hover={{
      cursor: "pointer",
      transform: "scale(1.10)",
      stroke: "red.500",
    }}
    {...props}
  >
    <path d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" />
  </Icon>
);

export const ProjectsIcon = (props) => (
  <Icon
    viewBox="0 0 28 28"
    boxSize={20}
    transition=".25s ease"
    fill="white"
    strokeWidth={2}
    _hover={{
      cursor: "pointer",
    }}
    {...props}
  >
    <path d="M8 6H5c-.553 0-1-.448-1-1s.447-1 1-1h3c.553 0 1 .448 1 1s-.447 1-1 1zM13 10H5c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1zM13 14H5c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1z" />
    <path d="M18 2v8c0 .55-.45 1-1 1s-1-.45-1-1V2.5c0-.28-.22-.5-.5-.5h-13c-.28 0-.5.22-.5.5v19c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5V21c0-.55.45-1 1-1s1 .45 1 1v1c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h14c1.1 0 2 .9 2 2z" />
    <path d="M23.87 11.882c.31.54.045 1.273-.595 1.643l-9.65 5.57c-.084.05-.176.086-.265.11l-2.656.66c-.37.092-.72-.035-.88-.314-.162-.278-.09-.65.17-.913l1.907-1.958c.063-.072.137-.123.214-.167.004-.01.012-.015.012-.015l9.65-5.57c.64-.37 1.408-.234 1.72.305l.374.65z" />
  </Icon>
);

export const PinPointIcon = (props) => (
  <Icon
    viewBox="0 0 24 24"
    boxSize={20}
    transition=".25s ease"
    fill="white"
    stroke="white"
    strokeWidth={2}
    _hover={{
      cursor: "pointer",
    }}
    {...props}
  >
    <path
      d="M12 13V21M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Icon>
);

export const TechIcon = (props) => (
  <Icon
    viewBox="0 0 14 14"
    boxSize={20}
    transition=".25s ease"
    fill="white"
    strokeWidth={2}
    _hover={{
      cursor: "pointer",
    }}
    {...props}
  >
    <path d="m 11.8,10.6 0,-7.2035638 C 11.8,2.7367083 11.264337,2.2 10.603564,2.2 l -7.2071278,0 C 2.7367083,2.2 2.2,2.7356627 2.2,3.3964362 L 2.2,10.6 1,10.6 1,11.2 c 0,0.333681 0.2664272,0.6 0.5950819,0.6 l 10.8098361,0 C 12.726816,11.8 13,11.531371 13,11.2 l 0,-0.6 -1.2,0 z m -8.4,-7.2 7.2,0 0,5.4 -7.2,0 0,-5.4 z m 2.4,6.6 2.4,0 0,0.6 -2.4,0 0,-0.6 z" />
  </Icon>
);

export const ProfileIcon = (props) => (
  <Icon
    viewBox="0 0 24 24"
    boxSize={20}
    transition=".25s ease"
    fill="white"
    stroke="white"
    strokeWidth={2}
    _hover={{
      cursor: "pointer",
    }}
    {...props}
  >
    <path d="M15 8.5C15 10.433 13.433 12 11.5 12C9.567 12 8 10.433 8 8.5C8 6.567 9.567 5 11.5 5C13.433 5 15 6.567 15 8.5Z" />
    <path
      d="M17.6305 20H5.94623C5.54449 20 5.31716 19.559 5.56788 19.2451C6.68379 17.8479 9.29072 15 12 15C14.7275 15 17.0627 17.8864 18.0272 19.2731C18.2474 19.5897 18.0161 20 17.6305 20Z"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Icon>
);
