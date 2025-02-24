// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */
import { unknown } from 'https://cdn.skypack.dev/zod@v1.11.17?dts';
import { FieldNullability, FieldRequiredness, InputFieldMap, InputShapeFromFields, InputShapeFromTypeParam, InputType, SchemaTypes, TypeParam, } from '../core/index.ts';
import { RefineConstraint, ValidationOptions } from './types.ts';
import { GiraphQLValidationPlugin } from './index.ts';
declare global {
    export namespace GiraphQLSchemaTypes {
        export interface Plugins<Types extends SchemaTypes> {
            validation: GiraphQLValidationPlugin<Types>;
        }
        export interface FieldOptions<Types extends SchemaTypes, ParentShape, Type extends TypeParam<Types>, Nullable extends FieldNullability<Type>, Args extends InputFieldMap, ResolveShape, ResolveReturnShape> {
            validate?: RefineConstraint<InputShapeFromFields<Args>>;
        }
        export interface InputObjectTypeOptions<Types extends SchemaTypes = SchemaTypes, Fields extends InputFieldMap = InputFieldMap> {
            validate?: RefineConstraint<InputShapeFromFields<Fields>>;
        }
        export interface InputFieldOptions<Types extends SchemaTypes = SchemaTypes, Type extends InputType<Types> | [
            InputType<Types>
        ] = InputType<Types> | [
            InputType<Types>
        ], Req extends FieldRequiredness<Type> = FieldRequiredness<Type>> {
            validate?: ValidationOptions<InputShapeFromTypeParam<Types, Type, true>>;
        }
    }
}
