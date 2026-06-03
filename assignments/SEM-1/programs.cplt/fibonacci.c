#include<stdio.h>
int main(){
	int i,n;
	int t1=0, t2=1;
	int nextTerm;

	printf("enter no. of terms");
	scanf("%d", &n);

	printf("fibonacci series upto %d terms", n);

	for(i=1;i<=n;i++)
	{
		printf("%d", t1);

	nextTerm= t1+t2;

	t1=t2;

	t2=nextTerm;
	}
	printf("\n");

	return 0;
}
