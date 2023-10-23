import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
}

const Link = ({page}: Props) => {
  
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");
  const linkStyles = `text-white hover:font-bold hover:underline 
  text-xs md:text-sm transition duration-500`;

  return (
    <AnchorLink
      className={`${linkStyles}`}
      href={`#${lowerCasePage}`}
    >
      {page}
    </AnchorLink>
  )
}

export default Link