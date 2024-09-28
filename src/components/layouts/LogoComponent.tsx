import { ReactComponent as StyleLeaderLogoIcon } from "../../assets/Icons/styleLeader-ci-gold.svg";

interface LogoProps {
  className?: string;
  width?: string | number;
}

const svgLogos: {
  domain: string;
  component: React.FunctionComponent;
}[] = [{ domain: "co", component: StyleLeaderLogoIcon }];

export default function Logo({ className }: LogoProps): React.ReactElement {
  const LogoComponent =
    svgLogos.find((entry) => window.location.hostname.includes(entry.domain))
      ?.component ?? StyleLeaderLogoIcon;

  return <LogoComponent className={className} width={200} />;
}

export function NavigationLinkItem() {
  return <></>;
}
