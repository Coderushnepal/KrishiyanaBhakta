#include<iostream>
using namespace std;

struct value{
	int min;
	int max;
};

struct value minMax(int arr[],int n){
	struct value minmax;
	int i;


		minmax.max=arr[0];
		minmax.min=arr[0];
	
	for(i=1;i<n;i++){
		if( arr[i] >minmax.max)
			minmax.max=arr[i];
		if ( arr[i] <minmax.min)
			minmax.min=arr[i];
	}
	return minmax;
}

int main(){
	int  n;
	cout<<"Enter number of inputs: ";
	cin >> n;
	int arr[n];
	cout<<"Enter numbers: ";
	for(int i=0; i<n;i++){
		cin>>arr[i];
	}
	struct value minmax=minMax(arr, n);
	cout<<"The minimum and maximum values in the given array is: ";
	cout<<"["<<minmax.min<< " , "<<minmax.max<<"]";
	return 0;
}