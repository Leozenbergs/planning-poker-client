import * as React from "react"
import { Outlet } from "react-router-dom";
import {
  Box,
  Grid,
	Container
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"

export const Base = () => {

	return (
		<Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Container maxW="lg">
					<Outlet />
				</Container>
      </Grid>
    </Box>
	)
}
