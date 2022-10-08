import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({ baseUrl : 'http://localhost:3200'}),
    tagTypes: ['tasks','doneTasks'],
    endpoints : (builder) => ({
        getTasks: builder.query({
            query: () => '/tasks',
            providesTags: ['tasks']
        }),
        getDoneTasks: builder.query({
            query:()=>'/donetasks',
            providesTags:['doneTasks']
        }),
        addTask : builder.mutation({
            query: (task) =>({
                url : '/tasks',
                method : 'POST',
                body : task
            }),
            invalidatesTags: ['tasks']
        }),
        taskIsDone : builder.mutation({
            query: (task) => ({
                url : '/donetasks',
                method : 'POST' ,
                body : task
            }),
            invalidatesTags: ['tasks','doneTasks']
        }),
        
        deleteTask : builder.mutation({
            query: (task) => ({
            url : `/tasks/${task.id}`,
                method : 'DELETE' ,
                body : task.id
            }),
            invalidatesTags: ['tasks','doneTasks']
        }),
        getBackDoneTask : builder.mutation({
            query: (task) =>({
                url : '/tasks',
                method : 'POST' ,
                body : task
            }),
            invalidatesTags: ['doneTasks','tasks']
        }),
        deleteDoneTask : builder.mutation({
            query : (task) => ({
                url : `/donetasks/${task.id}`,
                method : 'DELETE' ,
                body : task.id
            }),
            invalidatesTags: ['doneTasks','tasks']
        })
    })
})

export const {
    useGetTasksQuery,
    useGetDoneTasksQuery,
    useAddTaskMutation,
    useDeleteDoneTaskMutation,
    useTaskIsDoneMutation,
    useDeleteTaskMutation,
    useGetBackDoneTaskMutation
} = apiSlice