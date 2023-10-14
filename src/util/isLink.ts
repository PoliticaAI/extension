const isLink = (link: string) => {
  try {
    return Boolean(new URL(link));
  } catch {
    return false;
  }
};

export default isLink;
