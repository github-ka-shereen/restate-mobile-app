import icons from '@/constants/icons';
import images from '@/constants/images';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = () => {
  const handleLogin = () => {};
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <Image
          source={images.onboarding}
          className='w-full h-4/6'
          resizeMode='contain'
        />
        <View className='px-10'>
          <Text className='text-base text-center uppercase text-black-200 font-rubik-regular'>
            Welcome To Restate
          </Text>
          <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>
            Let's Get You Closer To{'\n'}{' '}
            <Text className='text-primary-300'>Your Ideal Home</Text>
          </Text>
          <Text className='text-lg font-rubik-regular text-black-200 text-center mt-12'>
            Login to ReState with Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'
          >
            <View className='flex flex-row items-center justify-center'>
              <Image
                source={icons.google}
                className='w-5 h-5'
                resizeMode='contain'
              />
              <Text className='font-rubik-medium text-lg text-black-300 ml-2'>
                Continue With Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
