#include<stdio.h>
int main(){
	int option;
	float num1,num2,result;

	printf("choose option for operation \n");
	printf("1-add \n");
	printf("2-subtract \n");
	printf("3-multiply \n");
	printf("4-divide \n");

	printf("Enter choice 1-4:");
	scanf("%d", &option);

	if (option>=1 && option<=4)
	{
		printf("enter first number:");
		scanf("%f", &num1);
		printf("enter second number:");
		scanf("%f", &num2);
	}

	switch (option)
	{ 
		case 1:
			//add
			result = num1 + num2;
			printf("%f", result);
			break;


		case 2:
			//subract
			result = num1 - num2;
			printf("%f", result);
			break;

		case 3:
			//multiply
			result = num1 * num2;
			printf("%f", result);
			break;

		case 4:
			//division
			if (num2 !=0)
			{
				result = num1/num2;
				printf("%f", result);
			}
			else
			{
				printf("errrorrrrrrrr sarrrrrrrrr");
			}
			break;

		default:
			//invalid input
			printf("option to daal dalle");
			break;

	}

	return 0;
	}
