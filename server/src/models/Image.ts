import mongoose, { Schema, Document, Model } from 'mongoose';
import { UserDoc } from './User';
import { CategoryDoc } from './Category';

interface ImageDoc extends Document {
  title: string;
  img: string;
  likes:[UserDoc];
  category: [CategoryDoc]; // need model
  views: number;
  downloads: number;
}

const ImageSchema = new Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  likes: [ { type: Schema.Types.ObjectId, ref: 'user'} ],
  category: [ {type: Schema.Types.ObjectId, ref: 'category'} ],
  views: { type: Number },
  downloads: { type: Number },
},{
  toJSON: {
    transform(doc, ret) {
      delete ret.__v;
      delete ret.createdAt;
      delete ret.updatedAt;
    },
  },
});

const Image = mongoose.model<ImageDoc>('image', ImageSchema);

export { Image, ImageDoc };