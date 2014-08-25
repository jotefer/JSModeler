/**
* Class: Light
* Description: Defines a directional light.
* Parameters:
*	ambient {number} the ambient component
*	diffuse {number} the diffuse component
*	specular {number} the specular component
*	direction {Vector} the direction of the light
*/
JSM.Light = function (ambient, diffuse, specular, direction)
{
	this.ambient = JSM.ValueOrDefault (ambient, 0x7f7f7f);
	this.diffuse = JSM.ValueOrDefault (diffuse, 0x7f7f7f);
	this.specular = JSM.ValueOrDefault (specular, 0x000000);
	this.direction = JSM.ValueOrDefault (direction, new JSM.Vector (1.0, 0.0, 0.0));
};