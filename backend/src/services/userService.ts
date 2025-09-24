import { client } from "@/prisma"

export const RegisterUser = async (data : Usertype) => {
    return await client.user.create({
        data : data
    })
}