namespace openfl._internal.backend.dummy;

import openfl._internal.bindings.typedarray.ArrayBufferView;
import openfl.display3D.textures.CubeTexture;
import BitmapData from "../display/BitmapData";
import ByteArray from "../utils/ByteArray";

#if!openfl_debug
@: fileXml('tags="haxe,release"')
@: noDebug
#end
class DummyCubeTextureBackend extends DummyTextureBaseBackend
{
	public constructor(parent: CubeTexture)
	{
		super(parent);
	}

	public uploadCompressedTextureFromByteArray(data: ByteArray, byteArrayOffset: number, async: boolean = false): void { }

	public uploadFromBitmapData(source: BitmapData, side: number, miplevel: number = 0, generateMipmap: boolean = false): void { }

	public uploadFromByteArray(data: ByteArray, byteArrayOffset: number, side: number, miplevel: number = 0): void { }

	public uploadFromTypedArray(data: ArrayBufferView, side: number, miplevel: number = 0): void { }
}