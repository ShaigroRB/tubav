import {
  ActionIcon,
  Box,
  Button,
  Card,
  Center,
  Group,
  Image,
  Stack,
} from "@mantine/core";
import React, { useContext, useState } from "react";
import { Download, Repeat } from "tabler-icons-react";
import { TubavContext } from "../../TubavContext";
import { Canvas } from "./Canvas";

const ContextMenu: React.FC<{ x: number; y: number }> = ({ x, y }) => {
  return (
    <Card
      style={{
        height: "128px",
        position: "absolute",
        top: y + "px",
        left: x + "px",
      }}
    >
      <a href="shaigro.dev">Hello</a>
    </Card>
  );
};

/**
 * Displays avatar and button to download it.
 */
export const Avatar = () => {
  const { downloadAvatar } = useContext(TubavContext);
  const [coordinates, setCoordinates] = useState({ x: -1, y: -1 });

  return (
    <React.Fragment>
      <Stack justify="center">
        <Box
          onContextMenu={(event: {
            pageX: number;
            pageY: number;
            preventDefault: () => void;
          }) => {
            event.preventDefault();
            setCoordinates({ x: event.pageX, y: event.pageY });
          }}
          onClick={() => setCoordinates({ x: -1, y: -1 })}
          style={{ flex: 3, textAlign: "center" }}
        >
          <Canvas id="ub-avatar" />
        </Box>

        <Group style={{ flex: 1 }} position="center">
          <Button onClick={downloadAvatar} rightIcon={<Download />}>
            Download
          </Button>
        </Group>
      </Stack>
      {coordinates.x !== -1 && <ContextMenu {...coordinates} />}
    </React.Fragment>
  );
};
