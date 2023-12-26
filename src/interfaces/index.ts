interface Config {
    outDir: string;
    apiKey: string;
    forceDownload: boolean;
}

interface Parameter extends Config {
    filePath: string;
}

interface ModFormat {
    projectID: number;
    fileID: number;
    required: boolean;
}

interface ModInfo extends ModFormat {
    id: number;
    modId: number;
    fileName: string;
    downloadUrl: string | undefined;
}

interface FilesFormat {
    files: ModFormat[];
    data: ModInfo[]
}

interface FilesInfo {
    succeed: ModFormat[];
    fail: ModFormat[];
}

type Event = 'download' | 'downloaded' | 'skipped' | 'done' | 'error';
type Callback<T> = (mods: T) => void;

export type {Config, Parameter, ModFormat, ModInfo, FilesFormat, FilesInfo, Event, Callback}
