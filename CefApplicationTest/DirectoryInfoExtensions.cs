using System;
using System.IO;

namespace CefApplicationTest
{
    public static class DirectoryInfoExtensions
    {
        public static bool IsPathInsideFolder(this DirectoryInfo path, DirectoryInfo folder)
        {
            if (path.Parent == null)
                return false;

            if(string.Equals(path.Parent.FullName, folder.FullName, StringComparison.OrdinalIgnoreCase))
            {
                return true;
            }

            return IsPathInsideFolder(path.Parent, folder);
        }
    }
}
