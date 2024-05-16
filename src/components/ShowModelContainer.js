import React, { Suspense, useEffect, useState } from "react";
import {
  Box,
  Card,
  Stack,
  Button,
  Typography,
  useTheme,
  CircularProgress,
} from "@mui/material";
import { Canvas } from "@react-three/fiber";
import {
  Html,
  useProgress,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import CokeModel from "../CokeModel";
import SpriteModel from "../SpriteModel";
import FantaModel from "../FantaModel";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress size={100} variant="determinate" value={progress} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" component="div" color="white">
            {`${Math.round(progress)}%`}
          </Typography>
        </Box>
      </Box>
    </Html>
  );
};
// function Loader() {
//   const { progress } = useProgress();
//   return <Html center>{/* <CircularProgress /> */}</Html>;
// }

const ShowModelContainer = (props) => {
  const theme = useTheme();
  const [wireframe, setWireframe] = useState(false);
  const [speed, setSpeed] = useState(0);
  const [rotation, setRotation] = useState({ x: 0, y: Math.PI });

  const showBack = () => setRotation({ x: 0, y: 0 });
  const showFront = () => setRotation({ x: 0, y: Math.PI }); // 180 degrees
  const showBottom = () => setRotation({ x: -Math.PI / 2, y: 0 }); // -90 degrees on X
  const showTop = () => setRotation({ x: Math.PI / 2, y: 0 }); // 90 degrees on X

  useEffect(() => {
    if (props?.autoSpin) {
      setSpeed(0.01);
    }
  }, [props?.autoSpin]);

  return (
    <Box
      sx={{
        position: "relative",
        height: props?.height ? props?.height : 700,
        "& > canvas": {
          width: "100%",
          height: "100%",
        },
      }}
    >
      <Canvas>
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.5} />
        <Suspense fallback={<Loader />}>
          <pointLight position={[5, 5, 5]} />
          <mesh position={[0, -1.7, 0]}>
            {props?.model === "fanta" && (
              <FantaModel
                rotationX={rotation.x}
                rotationY={rotation.y}
                wireframe={wireframe}
                speed={speed}
              />
            )}
            {props?.model === "coke" && (
              <CokeModel
                rotationX={rotation.x}
                rotationY={rotation.y}
                wireframe={wireframe}
                speed={speed}
              />
            )}
            {props?.model === "cokeZero" && (
              <CokeModel
                rotationX={rotation.x}
                rotationY={rotation.y}
                wireframe={wireframe}
                speed={speed}
              />
            )}
            {props?.model === "sprite" && (
              <SpriteModel
                rotationX={rotation.x}
                rotationY={rotation.y}
                wireframe={wireframe}
                speed={speed}
              />
            )}
            <meshStandardMaterial color={"red"} />
          </mesh>
          <Environment preset="sunset" background backgroundBlurriness={0} />
          <OrbitControls />
        </Suspense>
      </Canvas>

      {/* Left Side Buttons (Navigation) */}
      {props?.showControls && (
        <Card
          sx={{
            position: "absolute",
            bottom: theme.spacing(2),
            left: theme.spacing(2),
            p: 1,
            bgcolor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <Stack direction="column" spacing={2} alignItems="center">
            <Button
              style={{ fontWeight: "bold", backgroundColor: "#db1b26" }}
              variant="contained"
              color="error"
              size="small"
              onClick={() => props?.setActiveModel("coke")}
            >
              Coke
            </Button>
            <Button
              style={{ fontWeight: "bold", backgroundColor: "#029427" }}
              variant="contained"
              size="small"
              onClick={() => props?.setActiveModel("sprite")}
            >
              Sprite
            </Button>
            <Button
              style={{ fontWeight: "bold", backgroundColor: "#ee6507" }}
              variant="contained"
              size="small"
              onClick={() => props?.setActiveModel("fanta")}
            >
              Fanta
            </Button>
          </Stack>
        </Card>
      )}

      {/* Right Side Buttons (Rotation and Rendering Mode) */}
      {props?.showControls && (
        <Card
          sx={{
            position: "absolute",
            bottom: theme.spacing(2),
            right: theme.spacing(2),
            p: 1,
            bgcolor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <Stack direction="column" spacing={2} alignItems="center">
            <Button
              style={{ fontWeight: "bold" }}
              variant="contained"
              color={"warning"}
              size={"small"}
              onClick={showFront}
            >
              Front
            </Button>
            <Button
              style={{ fontWeight: "bold" }}
              variant="contained"
              color={"warning"}
              size={"small"}
              onClick={showBack}
            >
              Back
            </Button>
            <Button
              style={{ fontWeight: "bold" }}
              variant="contained"
              color={"warning"}
              size={"small"}
              onClick={showTop}
            >
              Top
            </Button>
            <Button
              style={{ fontWeight: "bold" }}
              variant="contained"
              color={"warning"}
              size={"small"}
              onClick={showBottom}
            >
              Bottom
            </Button>
            <Button
              style={{ fontWeight: "bold" }}
              onClick={() => setSpeed(0.01)}
              variant="contained"
              color={"info"}
              size={"small"}
            >
              Spin
            </Button>
            <Button
              style={{ fontWeight: "bold" }}
              onClick={() => setSpeed(0.11)}
              variant="contained"
              color={"info"}
              size={"small"}
            >
              Spin x 2
            </Button>
            <Button
              style={{ fontWeight: "bold" }}
              onClick={() => setSpeed(0.51)}
              variant="contained"
              color={"info"}
              size={"small"}
            >
              Spin x 4
            </Button>
            <Button
              style={{ fontWeight: "bold" }}
              onClick={() => setWireframe(!wireframe)}
              variant="contained"
              color={"primary"}
              size={"small"}
            >
              Wire
            </Button>
            <Button
              style={{ fontWeight: "bold" }}
              variant="contained"
              color={"error"}
              size={"small"}
              onClick={() => {
                setRotation({ x: 0, y: Math.PI });
                setSpeed(0);
                setWireframe(false);
              }}
            >
              Reset
            </Button>
          </Stack>
        </Card>
      )}
    </Box>
  );
};

export default ShowModelContainer;
