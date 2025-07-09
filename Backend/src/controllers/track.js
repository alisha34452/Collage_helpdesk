import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Track } from "../models/track.model.js";

const TrackUser = asyncHandler(async (req, res) => {
  // increase visit count
  // check for user creation
  // retrun response

  const updatedTrack = await Track.findOneAndUpdate(
    {}, // add criteria if you have multiple documents, or leave empty for the first document
    { $inc: { count: 1 } },
    { new: true, upsert: true  }
  );
  if (!updatedTrack) {
    console.error("❌ Failed to update track");
    throw new ApiError(500, "Failed to update visit count");
  }

  console.log("✅ Track updated:", updatedTrack);
  

  return res
    .status(201)
    .json(new ApiResponse(200, updatedTrack, "Inceresed Count successfully"));
});

export { TrackUser };
