import Comment from "../schemas/comment.js";

const postComment = async (req, res, next) => {
  const { postId, content} = req.body;
  try {
    const comment = await Comment.create({
      postId,
      content,
    });
    return res.status(201).json({ result: "true" });
  } catch (err) {
    console.error(err);
    next(err);
  }
}

const deleteComment = async (req, res, next) => {
  try {
    await Comment.remove({ _id: req.params.id });
    return res.json({ result: "true" });
  } catch (err) {
    console.error(err);
  }
}

const updateComment = async (req, res, next) => {
  try {
    await Comment.update({
      _id: req.params.id,
    }, {
      content: req.body.comment,
    });
    return res.status(200).json({ result: "true" });
  } catch (err) {
    console.error(err);
    next(err);
  }
}

export {
  postComment,
  deleteComment,
  updateComment,
}