import connectDB from "@/config/db";
import Movie from "@/models/Movie";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    await connectDB();
    const { user, rating, comment } = await req.json();
    const id = await res.params.id;
    const movie = await Movie.findById(id);
    console.log(user, rating, comment, id);
    if (movie) {
      const alreadyReviewed = movie.reviews.find(
        (r) => r.user.toString() === user._id
      );

      if (alreadyReviewed) {
        return NextResponse.json(
          { error: "Movie already reviewed" },
          { status: 400 }
        );
      }

      const review = {
        name: user.username,
        rating: Number(rating),
        comment,
        user: user._id,
      };

      movie.reviews.push(review);
      movie.numReviews = movie.reviews.length;
      movie.rating =
        movie.reviews.reduce((acc, item) => item.rating + acc, 0) /
        movie.reviews.length;

      await movie.save();
      return NextResponse.json({ message: "Review Added" }, { status: 201 });
    } else {
      return NextResponse.json({ error: "Movie not found" }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, res) {
  try {
    const data = await req.json();
    // console.log(data.reviewId);
    const movie = await Movie.findById(data.movieId);

    if (!movie) {
      return NextResponse.json({ error: "Movie not found" }, { status: 404 });
    }

    const reviewIndex = movie.reviews.findIndex(
      (r) => r._id.toString() === data.reviewId
    );

    if (reviewIndex === -1) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }

    movie.reviews.splice(reviewIndex, 1);
    movie.numReviews = movie.reviews.length;
    movie.rating =
      movie.reviews.length > 0
        ? movie.reviews.reduce((acc, item) => item.rating + acc, 0) /
          movie.reviews.length
        : 0;

    await movie.save();
    return NextResponse.json({ message: "Comment Deleted Successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
