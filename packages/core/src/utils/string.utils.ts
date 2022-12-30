export class StringUtils {
    public static isNullOrEmpty( str: string | null | undefined ) : str is (null | undefined | '') {
        return str === undefined || str === null || str === '';
    }
}
