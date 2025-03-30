import { Column, Entity } from "typeorm";
import { BaseEntity } from "../utils/BaseEntity";

@Entity()
export class User extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column({ unique: true, nullable: true })
  googleId: string; // Unique ID provided by Google during authentication

  @Column()
  avatar: string; // Profile picture from Google
}
