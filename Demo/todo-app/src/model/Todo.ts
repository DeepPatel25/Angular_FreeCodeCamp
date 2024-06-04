import { Injectable } from "@angular/core"

@Injectable({
    providedIn: "root"
})
export class Todo {
    id!: number
    title!: string
    description!: string
    isActive!: boolean
}