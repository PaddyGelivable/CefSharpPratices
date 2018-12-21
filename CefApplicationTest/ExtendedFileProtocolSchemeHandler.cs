using CefSharp;
using System;
using System.IO;

namespace CefApplicationTest
{
    public class ExtendedFileProtocolSchemeHandler : ResourceHandler
    {
        #region private variables

        private readonly string frontEndFolderPath;

        #endregion

        #region c'or

        public ExtendedFileProtocolSchemeHandler()
        {
            frontEndFolderPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, Constants.FrontEndAppDir);
        }

        #endregion

        #region override function

        public override bool ProcessRequestAsync(IRequest request, ICallback callback)
        {
            var uri = new Uri(request.Url);
            var fileName = uri.AbsolutePath;

            var requestedFilePath = frontEndFolderPath + fileName;
            var requestedFilePathDirInfo = new DirectoryInfo(requestedFilePath);
            var isAccessToFilePermitted = requestedFilePathDirInfo.IsPathInsideFolder(new DirectoryInfo(frontEndFolderPath));

            if(isAccessToFilePermitted && File.Exists(requestedFilePath))
            {
                var bytes = File.ReadAllBytes(requestedFilePath);
                Stream = new MemoryStream(bytes);

                var fileExtension = Path.GetExtension(fileName);
                MimeType = GetMimeType(fileExtension);

                callback.Continue();
                return true;
            }

            callback.Dispose();
            return false;
        }

        #endregion
    }
}
