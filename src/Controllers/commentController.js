const Comment = require("../Models/commentModel");
const domain = "http://localhost:5000";

// Helper function to send error responses
const sendErrorResponse = (res, error) => {
  console.log(error);
  res.status(500).json({ msg: error.message });
};

// Create a new comment
const createComment = async (req, res) => {
  try {
    const {
        content,
        createdBy,
        recipe,
      
    } = req.body;
    let CommentData = {
        content,
        createdBy,
        recipe,
      
    };

    if (req.file) {
      const CommentImage = `${domain}/uploads/Comments/${req.file.filename}`;
      CommentData.CommentImage = CommentImage;
    }

    const Comment = new Comment(CommentData);
    await Comment.save();

    res.status(201).json({
      msg: "Comment created successfully",
      Comment: Comment,
      success: true,
    });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// // Update a Comment (Admin Only)
// const updateComment = async (req, res) => {
//   try {
//     const {
//       category,
//       name,
//       description,
      
//     } = req.body;
//     let updateData = {
//       category,
//       name,
//       description,
      
//     };

//     if (req.file) {
//       const CommentImage = `${domain}/uploads/Comments/${req.file.filename}`;
//       updateData.CommentImage = CommentImage;
//     }

//     const Comment = await Comment.findByIdAndUpdate(req.params.id, updateData, {
//       new: true,
//     });

//     if (!Comment) {
//       return res.status(404).json({ msg: "Comment not found" });
//     }

//     res.status(200).json({
//       msg: "Comment updated successfully",
//       Comment: Comment,
//       success: true,
//     });
//   } catch (error) {
//     sendErrorResponse(res, error);
//   }
// };

// // Get all Comments (Public)
// const getComments = async (req, res) => {
//   const { search, sort } = req.query;
//   let query = {};
//   if (search) {
//     query.name = { $regex: search, $options: "i" };
//   }

//   let Comments = await Comment.find(query);

//   if (sort) {
//     const sortOrder = sort === "asc" ? 1 : -1;
//     Comments = Comments.sort((a, b) => (a.price - b.price) * sortOrder);
//   }

//   res.json(Comments);
// };

// // Get all Comments (Public) and filter by category
// const getCommentsByCategory = async (req, res) => {
//   try {
//     const Comments = await Comment.find({ category: req.params.categoryId });
//     res.status(200).json(Comments);
//   } catch (error) {
//     sendErrorResponse(res, error);
//   }
// };

// // Get a single Comment by ID (Public)
// const getComment = async (req, res) => {
//   try {
//     const Comment = await Comment.findById(req.params.id);

//     if (!Comment) {
//       return res.status(404).json({ msg: "Comment not found" });
//     }

//     res.status(200).json(Comment);
//   } catch (error) {
//     sendErrorResponse(res, error);
//   }
// };

// // Delete a Comment (Admin Only)
// const deleteComment = async (req, res) => {
//   try {
//     const Comment = await Comment.findByIdAndDelete(req.params.id);

//     if (!Comment) {
//       return res.status(404).json({ msg: "Comment not found" });
//     }

//     res
//       .status(200)
//       .json({ msg: "Comment deleted successfully", success: true });
//   } catch (error) {
//     sendErrorResponse(res, error);
//   }
// };

module.exports = {
  createComment,
//   updateComment,
//   getComments,
//   getComment,
//   deleteComment,
};