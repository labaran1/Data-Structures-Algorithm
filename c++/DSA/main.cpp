#include <iostream>
#include <Search.h>

using namespace std;

int main()
{
vector<int> searchArray {1,2,3,4,5,6,7,8};

    linearSearch();
     binarySearch(searchArray, 2);

    return 0;
}
