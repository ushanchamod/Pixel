import mongoose, { Schema, Document, Model } from 'mongoose';
import { CategoryDoc } from './Category';

interface UserDoc extends Document {
  firstName: string;
  lastName: string;
  category: [CategoryDoc];
  email: string;
  password: string;
  images: string
}

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  category: [{ type: Schema.Types.ObjectId, ref: 'category' }],
  email: { type: String, required: true },
  password: { type: String, required: true },
  images: { type: String },
},{
  toJSON: {
    transform(doc, ret) {
      delete ret.__v;
      delete ret.createdAt;
      delete ret.updatedAt;
    },
  },
});

const User = mongoose.model<UserDoc>('user', UserSchema);

export { User, UserDoc };