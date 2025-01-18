import { model, models, Schema, Document, Model } from 'mongoose';
import bcrypt from 'bcryptjs';

// User interface
interface User {
	username: string;
	password: string;
	email: string;
	avatar: string;
	createdAt?: Date;
	updatedAt?: Date;
}

// Extending User interface with Mongoose Document and custom method
interface UserDocument extends User, Document {
	validatePassword(password: string): Promise<boolean>;
}

const usersSchema = new Schema<UserDocument>(
	{
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		avatar: { type: String, required: true },
		email: { type: String, required: true, unique: true },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

// Adding custom method to the schema for password validation
usersSchema.method(
	'validatePassword',
	async function (password: string): Promise<boolean> {
		return await bcrypt.compare(password, this.password);
	}
);

export const Users: Model<UserDocument> =
	models?.users || model<UserDocument>('users', usersSchema);
