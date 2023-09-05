import { Fan } from './fan';
import { Fighter } from './fighter';
import { Referee } from './referee';
import { Ring } from './ring';
import { Videographer } from './videographer';
import { Advertiser } from './advertiser';

export interface FullUser {
    id: string
    displayName: string
    photoURL: string
    phoneNumber: string
    email: string
    banned: boolean

    fighter?: Fighter | null
    fan?: Fan | null
    referee?: Referee | null
    ring?: Ring | null
    videographer?: Videographer | null
    advertiser?: Advertiser | null
}
