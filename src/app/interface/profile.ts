import { LinkListItem } from "../interfaces/link-list-item";

export interface Profile {
    name: string;
    address: string;
    description: string;
    photo: string;
    socialMediaList: LinkListItem[];
}
