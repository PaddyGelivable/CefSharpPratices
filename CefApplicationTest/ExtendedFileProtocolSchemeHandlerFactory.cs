using CefSharp;

namespace CefApplicationTest
{
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
