using CefSharp;

namespace CefApplicationTest
{
    /// <summary>
    /// Cef suggest to customize the file protocol, please refer the following link
    /// https://github.com/cefsharp/CefSharp/wiki/General-Usage#file-uri-file
    /// </summary>
    public class ExtendedFileProtocolSchemeHandlerFactory : ISchemeHandlerFactory
    {
        #region ISchemeHandlerFactory

        public IResourceHandler Create(IBrowser browser, IFrame frame, string schemeName, IRequest request)
        {
            return new ExtendedFileProtocolSchemeHandler();
        }

        #endregion
    }
}
