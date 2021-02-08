const mapper = (data) => {
  const mapped = data.map((each) => {
    const list = each.albums?.items || each.playlists?.items;
    return {
      articles: list.map((article) => ({
        id: article.id,
        image: article.images[0].url,
        description: article.description,
        name: article.name,
      })),
      title: each.title,
    };
  });

  return mapped;
};

module.exports = mapper;
