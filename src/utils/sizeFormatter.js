export function formatFileSize(sizeInBytes) {
  if (sizeInBytes >= 1048576) {
    // 1MB = 1024 * 1024 bytes
    return `${(sizeInBytes / 1048576).toFixed(2)} MB`;
  } else if (sizeInBytes >= 1024) {
    // 1KB = 1024 bytes
    return `${(sizeInBytes / 1024).toFixed(2)} KB`;
  } else {
    return `${sizeInBytes} Bytes`;
  }
}
