import { model, models, Schema } from "mongoose";

type ProfileInfo = {
  username: string;
  displayName: string;
  bio: string;
  avatarUrl: string;
  coverImage: string;
};

const profileInfoSchema = new Schema<ProfileInfo>(
  {
    username: { type: String, unique: true, required: true },
    displayName: { type: String, unique: true },
    bio: { type: String },
    avatarUrl: { type: String },
    coverImage: { type: String },
  },
  { timestamps: true }
);

export const ProfileInfoModel = models?.ProfileInfo || model('ProfileInfo', profileInfoSchema);