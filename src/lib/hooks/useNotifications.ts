// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import {
//   CreateNotification,
//   DeleteNotification,
//   GetShopNotificatoins,
//   GetUnreadNotificationsCount,
//   MarkAllNotificationAsRead,
//   MarkNotificationAsRead,
// } from "../api/notifications";
// import { useSelector } from "react-redux";

// type notificationData = {
//   subject: string;
//   message?: string;
//   shopId: number
// };

// const useNotifications = () => {
//   const queryClient = useQueryClient();
//   const userSqlData = useSelector((state) => state.users.userSqlData);

//   const {
//     data: notifications,
//     isLoading,
//     error,
//   } = useQuery(
//     ["notifications"],
//     async () => {
//       console.log("first");
//       const response = await GetShopNotificatoins(userSqlData?.shopId);
//       return response;
//     },
//     {
//       enabled: !!userSqlData, // Enable the query only if userSqlData is defined
//     }
//   );


//   const {
//     data: unread_notifications_count,
//     isLoading: unread_loading,
//     error : unread_error,
//   } = useQuery(
//     ["unread_notifications_count"],
//     async () => {
//       console.log("first");
//       const response = await GetUnreadNotificationsCount(userSqlData?.shopId);
//       return response;
//     },
//     {
//       enabled: !!userSqlData, // Enable the query only if userSqlData is defined
//     }
//   );



//   const createNotificationMutation = useMutation(
//     async (notificationData: notificationData) => {
//       const response = await CreateNotification(notificationData);
//       return response;
//     },
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries(["notifications"]);
//       },
//     }
//   );

//   const markAsReadMutation = useMutation(
//     async (notificationId) => {
//       const response = await MarkNotificationAsRead(notificationId);
//       return response;
//     },
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries(["notifications"]);
//       },
//     }
//   );

//   const markAllAsReadMutation = useMutation(
//     async (notificationId) => {
//       const response = await MarkAllNotificationAsRead(userSqlData?.shopId);
//       return response;
//     },
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries(["notifications"]);
//       },
//     }
//   );

//   const deleteNotificationMutation = useMutation(
//     async (notificationId) => {
//       const response = await DeleteNotification(notificationId);
//       return response;
//     },
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries(["notifications"]);
//       },
//     }
//   );



//   return {
//     notifications,
//     isLoading,
//     error,
//     createNotification: createNotificationMutation.mutate,
//     markAsRead: markAsReadMutation.mutate,
//     markAllAsRead: markAllAsReadMutation.mutate,
//     unread_notifications_count,
//     deleteNotification: deleteNotificationMutation.mutate,
//   };
// };

// export default useNotifications;
