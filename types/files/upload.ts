export interface ServerUploadFile {
  buffer: Buffer;
  originalName: string;
  mimeType: string;
  size: number;
}
