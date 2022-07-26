import Post from "../schemas/post.js";
import Comment from "../schemas/comment.js";

const postArticle = async (req, res, next) => {
  const { title, content, password } = req.body;
  try {
    const post = await Post.create({
      title,
      content,
      password,
    });
    console.log(post);
    return res.redirect("/");
  } catch (err) {
    console.error(err);
    next(err);
  }
}

const getArticle = async (req, res, next) => {
  try {
    const post = await Post.find({ _id: req.params.id });
    const comment = await Comment.find({ _id: req.params.id });
    const postComments = await Comment.find({ postId: req.params.id })
      .populate("postId");
    return res.render("article-detail", {
      post,
      postComments,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
}

const updateArticle = async (req, res, next) => {
  const { id, title, password, content } = req.body;
  try {
    const post = await Post.find({ _id: id });
    const result = post[0].password;
    if (password !== result) return res.redirect(`/article/${post[0]._id}?error=비밀번호 불일치`);
    const update = await Post.updateOne({
      _id: id,
    }, {
      title,
      content,
    });
    return res.redirect(`/article/${post[0]._id}`);
  } catch (err) {
    console.error(err);
    next(err);
  }
}

const deleteArticle = async (req, res, next) => {
  try {
    const post = await Post.find({ _id: req.params.id });
    if (req.body.password !== post[0].password) return res.status(200).json({ result: "false" });
    await Post.remove({ _id: req.params.id });
    return res.redirect("/");
  } catch (err) {
    console.error(err);
    next(err);
  }
}

export {
  postArticle,
  getArticle,
  updateArticle,
  deleteArticle,
}