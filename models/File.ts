import mongoose, { Schema, Document, models } from "mongoose";

export interface IFile extends Document {
  filename: string;
  contentType: string;
  size: number;
  data: Buffer;
  uploadedBy: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const FileSchema = new Schema<IFile>(
  {
    filename: { type: String, required: true, trim: true },
    contentType: { type: String, required: true },
    size: { type: Number, required: true, max: 5 * 1024 * 1024 }, // 5MB
    data: { type: Buffer, required: true },
    uploadedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const FileModel = models.File || mongoose.model<IFile>("File", FileSchema);
export default FileModel;
