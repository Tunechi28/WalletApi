export interface UserDto {
    id: number,
    email: string,
    password?:string,
    fullName?: string,
    token?: string
    wallet_id?: number
}