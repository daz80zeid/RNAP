import { QL_GET_ALL_FIGHTERS } from './fighters/getAllFighters';
import { QL_GET_ALL_NEWS } from './news/getAllNews';
import { QL_GET_NEWS_BY_ID } from './news/getNewsById';
import { QL_GET_COMMENTS_BY_NEWS_ID } from './news/getCommentsByNewsId';
import { QL_GET_FULL_USER_BY_ID } from './users/getFullUserById';
import { QL_GET_SHORT_USER_BY_ID } from './users/getShortUserById';
import { QL_STATISTIC_GET_ALL_NEWS } from './statistic/getAllNewsStatistic';
import { QL_STATISTIC_GET_All_FIGHTS } from './statistic/getAllFightsStatistic';
import { QL_STATISTIC_GET_ALL_USERS } from './statistic/getAllUsersStatistic';
import { QL_STATISTIC_GET_All_COMMENTS } from './statistic/getAllCommentsStatistic';
import { QL_STATISTIC_GET_All_FIGHTERS } from './statistic/getAllFightersStatistic';
import { QL_STATISTIC_GET_All_RINGS } from './statistic/getAllRingsStatistic';
import { QL_STATISTIC_GET_All_REFEREES } from './statistic/getAllRefereesStatistic';
import { QL_STATISTIC_GET_ALL_VIDEOGRAPHERS } from './statistic/getAllVideographersStatistic';
import { QL_STATISTIC_GET_ALL_FANS } from './statistic/getAllFansStatistic';
import { QL_DELETE_COMMENT } from './news/deleteComment';
import {QL_BAN_USER_BY_ADMIN } from './users/banUserByAdmin';
import { QL_UNBAN_USER_BY_ADMIN } from './users/unbanUserByAdmin';
import { QL_DELETE_USER_BY_ADMIN } from './users/deleteUserByAdmin';
import { QL_GET_LINK_FOR_DOWNLOAD_FIGHTERS } from './fighters/getLinkForDownloadFighters'

export {
    QL_GET_ALL_FIGHTERS,
    QL_GET_ALL_NEWS,
    QL_GET_NEWS_BY_ID,
    QL_GET_COMMENTS_BY_NEWS_ID,
    QL_GET_FULL_USER_BY_ID,
    QL_GET_SHORT_USER_BY_ID,
    QL_STATISTIC_GET_ALL_NEWS,
    QL_STATISTIC_GET_All_FIGHTS,
    QL_STATISTIC_GET_ALL_USERS,
    QL_STATISTIC_GET_All_COMMENTS,
    QL_STATISTIC_GET_All_FIGHTERS,
    QL_STATISTIC_GET_All_RINGS,
    QL_STATISTIC_GET_All_REFEREES,
    QL_STATISTIC_GET_ALL_VIDEOGRAPHERS,
    QL_STATISTIC_GET_ALL_FANS,
    QL_DELETE_COMMENT,
    QL_BAN_USER_BY_ADMIN,
    QL_UNBAN_USER_BY_ADMIN,
    QL_DELETE_USER_BY_ADMIN,
    QL_GET_LINK_FOR_DOWNLOAD_FIGHTERS
};
