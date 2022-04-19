import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <Box as="aside" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GÉNÉRAL">
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink icon={RiContactsLine}>Utilisateur</NavLink>
        </NavSection>

        <NavSection title="AUTOMATISATION">
          <NavLink icon={RiInputMethodLine}>Formulaires</NavLink>
          <NavLink icon={RiGitMergeLine}>Automatisation</NavLink>
        </NavSection>
      </Stack>
    </Box>
  );
}
