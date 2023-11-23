import mongoose, { Schema, Document, Model } from 'mongoose';

interface CategoryDoc extends Document {
  name: string;
  description: string;
  coverImage: string;
}

const CategorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  coverImage: { type: String },
},{
  toJSON: {
    transform(doc, ret) {
      delete ret.__v;
      delete ret.createdAt;
      delete ret.updatedAt;
    },
  },
});

const Category = mongoose.model<CategoryDoc>('category', CategorySchema);

export { Category, CategoryDoc };