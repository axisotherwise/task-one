import Post from "../schemas/post.js";

const articleRender = async (req, res, next) => {
  try {
    const posts = await Post.find({}).sort({ createdAt: -1 });
    return  res.render("article", {
      posts,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

const writeRender = (req, res, next) => {
  return res.render("write");
}

export {
  articleRender,
  writeRender,
}