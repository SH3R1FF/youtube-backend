import mongoose, {Model, Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videosSchema = new Schema(
    {
        videFile: {
            type: String, //cloudinary url
            required: true
        },
        thumbnail: {
            type: String, //cloudinary url
            required: true
        },
        title: {
            type: String, 
            required: true
        },
        description: {
            type: String, 
            required: true
        },
        duration: {
            type: Number, //from cloudinary 
            required: true
        },
        views: {
            type: String, 
            default: 0,
        },
        isPublished: {
            type: Boolean, 
            default: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
        
    },

    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.Model('Video', videosSchema)