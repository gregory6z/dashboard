import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GÉNÉRAL">
        <NavLink icon={RiDashboardLine} href="/dashboard">
          Dashboard
        </NavLink>
        <NavLink icon={RiContactsLine} href="users">
          Utilisateur
        </NavLink>
      </NavSection>

      <NavSection title="AUTOMATISATION">
        <NavLink icon={RiInputMethodLine} href="/forms">
          Formulaires
        </NavLink>
        <NavLink icon={RiGitMergeLine} href="/automation">
          Automatisation
        </NavLink>
      </NavSection>
    </Stack>
  );
}
