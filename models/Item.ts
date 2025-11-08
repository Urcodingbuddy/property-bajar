import mongoose, { Schema, Document, models } from "mongoose";

export interface IItem extends Document {
  title: string;
  description?: string;
  price?: number;
  category?: string;
  createdBy: mongoose.Types.ObjectId;
  images: mongoose.Types.ObjectId[]; // <── NEW
  createdAt: Date;
  updatedAt: Date;
}

const ItemSchema = new Schema<IItem>(
  {
    title: { type: String, required: [true, "Title is required"], trim: true },
    description: { type: String, trim: true },
    price: { type: Number, default: 0 },
    category: { type: String, trim: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    images: [{ type: Schema.Types.ObjectId, ref: "File" }], // <── NEW
  },
  { timestamps: true }
);

const Item = models.Item || mongoose.model<IItem>("Item", ItemSchema);
export default Item;
