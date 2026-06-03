#include <stdio.h>
int main() {
	float area,base,height;
	printf("enter base");
	scanf("%f" , &base);
	printf("enter height");
	scanf("%f" , &height);
	area = (base*height)/2;
	printf("The area of Triangle is %f" , area);
	return 0;
}

