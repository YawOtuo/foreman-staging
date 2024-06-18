function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  const navbar = document.querySelector(".sticky");
  if (section && navbar) {
    const navbarHeight = navbar.clientHeight;
    const offsetTop = section.offsetTop - navbarHeight - 10;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}

export default scrollToSection;
