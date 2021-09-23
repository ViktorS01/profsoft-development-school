export type SelectType = {
    id: number,
    isActive: boolean,
    initialValue: string,
    width: string,
    links: Array<LinksSelectMap>,
}

type LinksSelectMap = {
    key: string,
    value: string
}